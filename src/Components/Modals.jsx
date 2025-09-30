import React from 'react'

function GenericModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  children,
  rightBtnClassName = "bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700",
  leftBtnClassName = "bg-gray-300 px-4 py-2 rounded hover:bg-gray-400",
  loading = false,
  confirmText = "Confirmar",
  cancelText = "Cancelar",
}) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 w-[400px] flex flex-col gap-5">
        <h2 className="text-xl font-bold text-center">{title}</h2>

        {/* Conteúdo extra opcional */}
        {children && <div className="text-center">{children}</div>}

        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={onClose}
            disabled={loading}
            className={`${leftBtnClassName} ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            {cancelText}
          </button>
          <button
            onClick={onConfirm}
            disabled={loading}
            className={`${rightBtnClassName} ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            {loading ? "Processando..." : confirmText}
          </button>
        </div>
      </div>
    </div>
  )
}

export default GenericModal
