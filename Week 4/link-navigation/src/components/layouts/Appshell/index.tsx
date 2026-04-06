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
                {/* footer */}
            </div>
        </main>
    );
};

export default Appshell;