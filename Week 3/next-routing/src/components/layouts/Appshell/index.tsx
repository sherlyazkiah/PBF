import Navbar from "../navbar";

type AppshellProps = {
    children: React.ReactNode;
};

const Appshell = (props: AppshellProps) => {
    const { children } = props;

    return (
        <main>
            {children}
            <div>
                Footer
            </div>
        </main>
    );
};

export default Appshell;