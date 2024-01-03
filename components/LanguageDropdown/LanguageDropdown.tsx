import { FC, useEffect, useRef, useState } from 'react';
import { HiOutlineChevronDown as DropdownIcon } from 'react-icons/hi';

import { Language } from '../../types/typeDefinitions';

interface Props {
  onSelect: (item: Language | any) => void;
  items: Language[];
  placeholder?: string;
  selectedItem?: Language | undefined;
}

const LanguageDropdown: FC<Props> = ({
  items,
  onSelect,
  selectedItem,
  placeholder,
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleSelect = (item: Language) => {
    onSelect(item);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [ref]);

  return (
    <div ref={ref} className='pb-0 relative border-none capitalize'>
      <div
        onClick={() => setOpen(!open)}
        className={'flex items-center gap-2 hover:cursor-pointer text-light'}
      >
        <p className={`${selectedItem ? 'opacity-100' : 'opacity-70'} text-sm`}>
          {selectedItem ? selectedItem.name : placeholder}
        </p>

        <DropdownIcon
          className={`${open && 'rotate-180'} text-md text-light`}
        />
      </div>

      <div
        className={`${
          open ? 'block' : 'hidden'
        } absolute bg-light rounded-md text-dark text-sm z-10 hover:cursor-pointer mt-[-21.8rem] left-0 w-full`}
      >
        {items?.map((item) => (
          <div
            key={item.id}
            onClick={() => handleSelect(item)}
            className={`${
              selectedItem === item
                ? 'text-light bg-dark opacity-80'
                : 'hover:text-secondary'
            } py-2 px-6 first:rounded-t-md last:rounded-b-md`}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageDropdown;
