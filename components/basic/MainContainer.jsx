const MainContainer = ({children}) => {
  return (
    <main className="mx-3 py-10 lg:mx-auto md:w-[95vw] lg:w-[90vw] xl:w-[85vw] 2xl:w-[80vw]">
        {children}
    </main>
  );
};
export default MainContainer;
