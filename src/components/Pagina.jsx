import PropTypes from "prop-types";

export function Pagina({ children }) {
    return (
        <main
            className={`
            flex items-start flex-1 text-base text-custom-white
        `}
        >
            {children}
        </main>
    );
}
Pagina.propTypes = {
    children: PropTypes.node,
};