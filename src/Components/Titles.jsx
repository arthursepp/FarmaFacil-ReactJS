
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const PrimaryText = ({ className, text }) => {
  return (
    <h1 className={`text-4xl font-poppins ${className}`}>
      {text}
    </h1>
  )
}

export const SecondaryText = ({ className, text }) => {
  return (
    <h2 className={`text-3xl font-poppins ${className}`}>
      {text}
    </h2>
  )
}

export const TerciaryText = ({ className, text }) => {
  return (
    <h3 className={`text-2xl font-poppins ${className}`}>
      {text}
    </h3>
  )
}

export const Header = ({ text, icon, divClassName, textClassName, iconClassName }) => {
  return (
    <div className={`flex items-center gap-3 ${divClassName}`}>
      <SecondaryText text={text} className={`${textClassName}`} />
      <FontAwesomeIcon icon={icon} className={`${iconClassName}`} />
    </div>
  )
}
