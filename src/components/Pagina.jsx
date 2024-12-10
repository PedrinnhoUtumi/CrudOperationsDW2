import PropTypes from "prop-types";

export function Pagina({ children }) {
    return (
        <main>
            {children}
        </main>

    );
}
Pagina.propTypes = {
    children: PropTypes.node,
};