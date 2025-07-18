import BasicMenu from "../components/menus/BasicMenu";


const BasicLayout = ({children}) => {
    return (
        <>
            <BasicMenu/> {/* 기존 헤더 대신 BasicMenu*/ }

            <div className="bg-white my-5 w-full flex flex-col space-y-1 md:flex-row md:space-x-1 md:space-y- 0"> 
            {/* 상단 여백 my-5 제거 */}

                <main className="bg-sky-300 md:w-2/3 lg:w-3/4 px-5 py-5">{children}</main>
                {/* 상단 여백 py-40 변경 flex 제거 */}

                <aside className="bg-green-300 md:w-1/3 lg:w-1/4 px-5 py-5">
                {/* 상단 여백 py-40 제거 flex 제거 */}

                    <h1 className="text-2xl md:text-4xl">Sidebar</h1>
                </aside>
            </div>
        </>
    );
}

export default BasicLayout;