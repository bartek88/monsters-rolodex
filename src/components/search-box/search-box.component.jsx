import "./search-box.styles.css";

export const SearchBox = ({ type, placeholder, handleChange }) => {
	return (
		<input
			className="search"
			type={type}
			placeholder={placeholder}
			onChange={handleChange}
		/>
	);
};
