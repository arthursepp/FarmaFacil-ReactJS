// Components/Tabs/GenericTabs.jsx
import { useState } from "react"

function GenericTabs({ tabs, defaultActive }) {
    const [activeTab, setActiveTab] = useState(defaultActive || tabs[0]?.id)

    return (
        <div className="w-full">
            {/* Header das Tabs */}
            <div className="flex border-b-1 border-slate-300 mt-3">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`
                            flex-1 
                            p-2 
                            text-center
                            border-2
                            rounded-t-xl
                            border-blue-500
                            ${activeTab === tab.id
                                ? `
                                    p-2.5
                                    rounded-t-xl
                                    font-bold
                                    cursor-pointer
                                    bg-blue-500
                                    text-white
                                `
                                : `
                                    cursor-pointer 
                                    hover:bg-blue-500 
                                    hover:text-white 
                                    hover:rounded-t-xl 
                                    p-2.5
                                `
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Conteúdo da aba ativa */}
            <div className="flex flex-col w-full border-l-1 border-r-1 border-b-1 border-slate-300 overflow-y-auto max-h-[520px]">
                {tabs.map((tab) =>
                    activeTab === tab.id ? (
                        <div key={tab.id} className="">
                            {tab.content}
                        </div>
                    ) : null
                )}
            </div>
        </div>
    )
}

export default GenericTabs
