import { FC, ReactNode, useCallback, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

type VerticalTabs = {
  tabs: { id: number; label: string; content: ReactNode }[];
};

export const VerticalTabs: FC<VerticalTabs> = props => {
  const [activeTab, setActiveTab] = useState(1);

  const location = useLocation();
  const navigate = useNavigate();

  const onTabClick = useCallback(
    event => {
      const tabId = +event.target.id.split('-').at(-1);
      const currentTab = props.tabs.find(tab => tab.id === tabId);
      const newPath = `/${currentTab.label}`;

      if (newPath !== location.pathname) {
        navigate(`/${currentTab.label}`);
        setActiveTab(tabId);
      }
    },
    [location],
  );

  return (
    <div className='flex h-screen rounded-xl'>
      <div className='flex flex-col w-40 border-r'>
        {props.tabs.map(tab => (
          <button
            id={`vertical-tab-${tab.id}`}
            key={tab.id}
            onClick={onTabClick}
            className={`px-4 py-3 text-left hover:bg-blue-300 hover:cursor-pointer focus:outline-none ${activeTab === tab.id ? 'font-semibold bg-blue-200 text-blue-600' : ''}`}
          >
            {tab.label.toUpperCase()}
          </button>
        ))}
      </div>

      <div className='flex-1 p-6'>{props.tabs.find(tab => tab.id === activeTab)?.content}</div>
    </div>
  );
};
