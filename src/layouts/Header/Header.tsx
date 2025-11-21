import type { HeaderProps } from "./Header.props";


function Header({ children }: HeaderProps) {

    return (
        <header className="header">
            {children}
        </header>
    );
}

export default Header;