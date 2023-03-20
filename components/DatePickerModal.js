import React from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {Pressable} from 'react-native';

const DatePickerModal = ({
  isDatePickerVisible,
  handleDatePicker,
  handleConfirm,
  handleCancel,
}) => {
  return (
    <Pressable onPress={handleDatePicker}>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </Pressable>
  );
};

export default DatePickerModal;
