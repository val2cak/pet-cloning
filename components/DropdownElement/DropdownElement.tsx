import { FC } from 'react';
import { Lookup } from '../../types/typeDefinitions';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import { FieldError } from 'react-hook-form';

interface Props {
  label?: string;
  placeholder: string;
  handleSelect: (item: Lookup) => void;
  data: Lookup[];
  selectedId: number;
  errors?: FieldError;
  classes?: string;
}

const DropdownElement: FC<Props> = ({
  label,
  placeholder,
  handleSelect,
  data,
  selectedId,
  errors,
  classes,
}) => {
  return (
    <div className='flex flex-col w-full'>
      {label && (
        <label
          className={`text-sm font-bold uppercase ${errors && 'text-red'}`}
        >
          {label} *
        </label>
      )}

      <DropdownMenu
        selectedItem={data?.find((item) => item.id === selectedId)}
        onSelect={handleSelect}
        items={data}
        placeholder={placeholder}
        errors={errors}
        classes={classes}
      />
    </div>
  );
};

export default DropdownElement;
