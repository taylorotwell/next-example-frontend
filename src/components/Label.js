const Label = ({ children, className, ...props }) => (
    <label
        className={`${className} block font-medium text-sm text-gray-700`}
        {...props}>
        {children}
    </label>
)

export default Label
