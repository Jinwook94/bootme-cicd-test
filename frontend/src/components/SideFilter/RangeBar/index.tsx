import React, { useState } from 'react';
import { Bar, Input, InputWrapper, Unit, Wrapper1, Wrapper2 } from './style';
import { useFilters } from '../../../hooks/useFilters';

export const RangeBar = ({ filterName }: RangeBarProps) => {
  let Filter = {
    label: '',
    minValue: 0,
    maxValue: 0,
    step: 0,
    unit: '',
  };

  const CostFilter = {
    label: 'cost',
    minValue: 0,
    maxValue: 1000,
    step: 50,
    unit: '만원 이하',
  };
  const PeriodFilter = {
    label: 'period',
    minValue: 0,
    maxValue: 12,
    step: 1,
    unit: '개월 이하',
  };

  {
    filterName === '비용' ? (Filter = CostFilter) : null;
    filterName === '수강 기간' ? (Filter = PeriodFilter) : null;
  }

  const [currentValue, setCurrentValue] = useState(Filter.maxValue);
  const { addFilter, removeBeforeAdd } = useFilters();

  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(Number(event.target.value));
    removeBeforeAdd(Filter.label, Number(event.target.value));
    addFilter(`${Filter.label}-${Number(event.target.value)}`);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const positiveIntegerRegEx = /^\d+$/;
    if (event.target.value === '') {
      setCurrentValue(0);
      removeBeforeAdd(Filter.label, 0);
      addFilter(`${Filter.label}-0`);
    } else if (positiveIntegerRegEx.test(event.target.value) && Number(event.target.value) <= Filter.maxValue) {
      setCurrentValue(Number(event.target.value));
      removeBeforeAdd(Filter.label, Number(event.target.value));
      addFilter(`${Filter.label}-${Number(event.target.value)}`);
    } else {
      event.target.value = '';
    }
  };

  return (
    <Wrapper1>
      <Bar
        value={currentValue}
        min={Filter.minValue}
        max={Filter.maxValue}
        step={Filter.step}
        onChange={handleRangeChange}
      />
      <Wrapper2>
        <InputWrapper>
          <Input value={currentValue} onChange={handleInputChange} />
        </InputWrapper>
        <Unit>{Filter.unit}</Unit>
      </Wrapper2>
    </Wrapper1>
  );
};

interface RangeBarProps {
  filterName: string;
}

export default RangeBar;