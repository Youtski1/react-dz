import type { BodyProps } from "./Body.props";


function Body({ children }: BodyProps) {

    return (
        <main>
            {children}
        </main>
    );
}


export default Body;