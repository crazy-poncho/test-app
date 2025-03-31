import { FC, ReactNode, useCallback, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useOutsideClick } from '../hooks';
import { routes } from '../routes';

type VerticalTabs = {
  tabs: { id: number; label: string; content: ReactNode }[];
};

export const VerticalTabs: FC<VerticalTabs> = props => {
  const location = useLocation();
  const navigate = useNavigate();
  const navigationRef = useRef(null);

  const [activeTab, setActiveTab] = useState(props.tabs.find(tab => tab.label === location.pathname.slice(1)).id);
  const [isOpen, toggleIsOpen] = useState<boolean>(false);

  const onTabClick = useCallback(
    event => {
      const tabId = +event.target.id.split('-').at(-1);
      const currentTab = props.tabs.find(tab => tab.id === tabId);
      const newPath = routes[currentTab.label];

      if (newPath !== location.pathname) {
        navigate(newPath);
        setActiveTab(tabId);
      }

      toggleIsOpen(false);
    },
    [location],
  );

  useOutsideClick(navigationRef, () => {
    toggleIsOpen(false);
  });

  return (
    <div data-testid='verticalTabs' className='grid grid-cols-5 h-screen'>
      <div
        ref={navigationRef}
        data-testid='tabNavigation'
        className={`flex sm:col-span-1 fixed top-0 left-0 transition-transform duration-300 sm:relative sm:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'} z-20`}
      >
        <nav className='flex flex-col sm:border-r'>
          {props.tabs.map(tab => (
            <button
              data-testid={`verticalTab${tab.id}`}
              id={`vertical-tab-${tab.id}`}
              key={tab.id}
              onClick={onTabClick}
              className={`px-4 py-3 text-left bg-blue-100 hover:bg-blue-300 hover:cursor-pointer focus:outline-none ${activeTab === tab.id ? 'font-semibold bg-blue-200 text-blue-600' : ''}`}
            >
              {tab.label.toUpperCase()}
            </button>
          ))}
        </nav>
      </div>

      <button
        className='sm:hidden fixed top-0 left-0 z-10 text-gray-800 text-2xl p-2 font-bold rounded hover:cursor-pointer'
        onClick={() => toggleIsOpen(true)}
      >
        ☰
      </button>

      <div data-testid='tabContent' className='flex-1 p-6 col-span-5 sm:col-span-4'>
        {props.tabs.find(tab => tab.id === activeTab)?.content}
      </div>
    </div>
  );
};
