export default function Page({ children }) {
    return (
        <div className="w-screen h-screen relative flex flex-col justify-between">
            {children}
        </div>
    );
}
