interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  variant?: string;
  size?: string;
  disabled?: boolean;
  isLoading?: boolean;
  isBlock?: boolean;
}

const VARIANT_ENUM: { [key: string]: string } = {
  primary: "bg-black text-white hover:bg-gray-800",
  secondary: "bg-pink-400 text-white",
  tertiary: "bg-white border border-gray-200 hover:bg-gray-100",
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  isLoading,
  type,
  isBlock,
  ...props
}) => {
  return (
    <button
      type={type ? type : "submit"}
      className={`flex items-center rounded-full px-6 py-3 text-sm font-medium drop-shadow-sm transition focus:ring-4 focus:ring-gray-300 ${
        isBlock ? `w-full justify-center` : null
      } ${VARIANT_ENUM[variant]} ${
        props.disabled ? `bg-gray-400 hover:bg-gray-400` : null
      }`}
      {...props}
    >
      <>
        {children} {isLoading ? <Spinner variant={variant} /> : null}
      </>
    </button>
  );
};

const Spinner: React.FC<{ variant: string }> = ({ variant }) => {
  return (
    <svg
      className={`ml-4 h-5 w-5 animate-spin ${
        variant === "secondary" ? `text-white` : `text-black`
      }`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
};

export default Button;
