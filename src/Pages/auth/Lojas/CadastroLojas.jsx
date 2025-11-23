import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import api, { viacep } from "../../../services/api";
import GenericContainer from "../../../Components/Containers";
import { PrimaryButton, ReturnButton, SecondaryButton } from "../../../Components/Buttons";
import AuthForm from "../../../Components/Forms";
import { SecondaryText } from "../../../Components/Titles";
import MaskedInput, { InputField } from "../../../Components/Inputs";

function CadastroLojas() {
  const [etapa, setEtapa] = useState(1);

  // estados do formulário
  const [cnpj, setCnpj] = useState('');
  const [nome, setNome] = useState("");
  const [nomeFranquia, setNomeFranquia] = useState("");
  const [email, setEmail] = useState("");
  const [cep, setCep] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');

  const [endereco, setEndereco] = useState({ cidade: '', estado: '', bairro: '', rua: '' });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false); // novo estado para sucesso

  const navigate = useNavigate();

  // função para limpar todos os campos
  const resetForm = () => {
    setCnpj('');
    setNome('');
    setNomeFranquia('');
    setEmail('');
    setCep('');
    setNumero('');
    setComplemento('');
    setSenha('');
    setConfirmaSenha('');
    setEndereco({ cidade: '', estado: '', bairro: '', rua: '' });
    setEtapa(1);
  };

  // Buscar CEP quando necessário
  const handleCep = async (cepValue) => {
    try {
      const response = await viacep.get(`${cepValue}/json`);
      const data = response.data;
      if (data.erro) {
        setError('CEP não encontrado');
        setEndereco({ cidade: '', estado: '', bairro: '', rua: '' });
        return;
      }
      setEndereco({
        cidade: data.localidade,
        estado: data.uf,
        bairro: data.bairro,
        rua: data.logradouro
      });
      setError('');
    } catch (err) {
      console.error(err);
      setError('Erro ao consultar CEP');
      setEndereco({ cidade: '', estado: '', bairro: '', rua: '' });
    }
  };

  useEffect(() => {
    if (cep && cep.replace(/\D/g, '').length === 8) {
      handleCep(cep.replace(/\D/g, ''));
    }
  }, [cep]);

  const nextStep = () => {
    if (etapa === 1) {
      if (!cnpj || !nome || !nomeFranquia || !email) {
        setError('Preencha todos os campos!');
        return;
      }
    }
    if (etapa === 2) {
      if (!cep || !endereco.cidade || !endereco.estado || !endereco.bairro || !endereco.rua || !numero) {
        setError('Preencha corretamente o endereço (CEP e número obrigatórios)');
        return;
      }
    }
    setError('');
    setEtapa(s => s + 1);
  };

  const prevStep = () => {
    setError('');
    setEtapa(s => Math.max(1, s - 1));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!senha || !confirmaSenha) {
      setError('Preencha as senhas');
      return;
    }
    if (senha !== confirmaSenha) {
      setError('As senhas não conferem');
      return;
    }

    if (!Object.values(passwordRules).every(Boolean)) {
      setError('A senha não atende aos requisitos.')
      return
    }

    setLoading(true);
    try {
      const payload = {
        cnpj,
        nome,
        rede: nomeFranquia,
        email,
        senha,
        confirmasenha: confirmaSenha,
        rua: endereco.rua,
        bairro: endereco.bairro,
        numero,
        cep,
        uf: endereco.estado,
        cidade: endereco.cidade,
        complemento
      };

      const response = await api.post('/farma/auth/register', payload);
      if (response.status === 201) {
        // Sucesso
        setSuccess(true);
        setError('');
        // Limpa o formulário
        resetForm();
      } else {
        setError(response.data?.msg || 'Erro ao registrar');
      }
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.msg || 'Erro ao registrar');
    } finally {
      setLoading(false);
    }
  };

  // usar efeito para redirecionar se sucesso for true
  useEffect(() => {
    let timer;
    if (success) {
      // redirecionar após 5 segundos
      timer = setTimeout(() => {
        window.location.href = '/login/lojas'; // ou a rota que você quiser
      }, 5000);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [success, navigate]);

  const passwordRules = {
    length: senha.length >= 12,
    upper: /[A-Z]/.test(senha),
    lower: /[a-z]/.test(senha),
    number: /[0-9]/.test(senha),
    special: /[!#@$^&*().;?":{}|<>]/.test(senha)
  }

  return (
    <GenericContainer>
      <div className='p-5'>
        <ReturnButton />

        <AuthForm divClassName='p-5 w-full xl:w-[60%] m-auto' formClassName={'gap-4'} onSubmit={handleRegister}>
          <div className='flex flex-col gap-3 items-center justify-center'>
            <SecondaryText text={`Cadastro de loja`} />
            <span className='text-gray-500'>Etapa {etapa} de 3</span>
          </div>

          {/* ETAPA 1 */}
          {etapa === 1 && (
            <>
              <MaskedInput
                labelText='CNPJ'
                mask='cnpj'
                maxLength={18}
                required
                value={cnpj}
                onValueChange={(clean) => setCnpj(clean)}
              />
              <InputField labelText='Nome' type='text' value={nome} onChange={(e) => setNome(e.target.value)} required />
              <InputField labelText='Nome da franquia' type='text' value={nomeFranquia} onChange={(e) => setNomeFranquia(e.target.value)} required />
              <InputField labelText='E-mail' type='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
            </>
          )}

          {/* ETAPA 2 */}
          {etapa === 2 && (
            <>
              <MaskedInput
                labelText='CEP'
                mask='cep'
                value={cep}
                maxLength={9}
                onValueChange={(clean) => setCep(clean)}
                required
              />

              <InputField labelText='Cidade' type='text' value={endereco.cidade} disabled required />
              <InputField labelText='Estado' type='text' value={endereco.estado} disabled required />
              <InputField labelText='Bairro' type='text' value={endereco.bairro} disabled required />
              <InputField labelText='Rua' type='text' value={endereco.rua} disabled required />
              <InputField labelText='Número' type='text' value={numero} onChange={(e) => setNumero(e.target.value)} required />
              <InputField labelText='Complemento (opcional)' type='text' value={complemento} onChange={(e) => setComplemento(e.target.value)} />
            </>
          )}

          {/* ETAPA 3 */}
          {etapa === 3 && !success && (
            <>
              <InputField
                labelText='Senha'
                type='password'
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
              />

              {/* Requisitos da senha */}
              <div className="flex flex-col text-sm mt-2">
                <p className={`${passwordRules.length ? 'text-green-600' : 'text-red-600'}`}>
                  {passwordRules.length ? '✔' : '✖'} Mínimo de 12 caracteres
                </p>

                <p className={`${passwordRules.upper ? 'text-green-600' : 'text-red-600'}`}>
                  {passwordRules.upper ? '✔' : '✖'} Pelo menos uma letra maiúscula
                </p>

                <p className={`${passwordRules.lower ? 'text-green-600' : 'text-red-600'}`}>
                  {passwordRules.lower ? '✔' : '✖'} Pelo menos uma letra minúscula
                </p>

                <p className={`${passwordRules.number ? 'text-green-600' : 'text-red-600'}`}>
                  {passwordRules.number ? '✔' : '✖'} Pelo menos um número
                </p>

                <p className={`${passwordRules.special ? 'text-green-600' : 'text-red-600'}`}>
                  {passwordRules.special ? '✔' : '✖'} Pelo menos um caractere especial (!@#...)
                </p>
              </div>

              <InputField
                labelText='Confirme a senha'
                type='password'
                value={confirmaSenha}
                onChange={(e) => setConfirmaSenha(e.target.value)}
                required
              />
            </>
          )}


          {/* Mensagem de sucesso */}
          {success && (
            <div className="text-green-600 text-center">
              Cadastro realizado com sucesso! Levando você para o login...
            </div>
          )}

          {error && <div className='text-red-600 text-center'>{error}</div>}

          <div className='flex gap-3'>
            {etapa > 1 && !success && (
              <SecondaryButton type='button' className='w-full' onClick={prevStep}>
                Voltar
              </SecondaryButton>
            )}

            {!success && (
              etapa < 3 ? (
                <PrimaryButton type='button' className={'w-full'} onClick={nextStep}>
                  Próximo
                </PrimaryButton>
              ) : (
                <PrimaryButton type='submit' disabled={loading} className='w-full'>
                  {loading ? 'Cadastrando...' : 'Cadastrar'}
                </PrimaryButton>
              )
            )}
          </div>

        </AuthForm>
      </div>
    </GenericContainer>
  );
}

export default CadastroLojas;
