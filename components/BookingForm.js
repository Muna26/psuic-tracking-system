import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { handleBooking } from '../utils/handleBooking';

const BookingForm = () => {
  const { t } = useTranslation('common');
  const [name, setName] = useState('');
  const [machineModel, setMachineModel] = useState('');
  const [issueDescription, setIssueDescription] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      await handleBooking({ name, machineModel, issueDescription, appointmentDate });
      setSubmitSuccess(true);
    } catch (error) {
      setSubmitError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="font-bold">
          {t('name')}
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 rounded-md p-2"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="machineModel" className="font-bold">
          {t('machineModel')}
        </label>
        <input
          type="text"
          id="machineModel"
          value={machineModel}
          onChange={(e) => setMachineModel(e.target.value)}
          className="border border-gray-300 rounded-md p-2"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="issueDescription" className="font-bold">
          {t('issueDescription')}
        </label>
        <textarea
          id="issueDescription"
          value={issueDescription}
          onChange={(e) => setIssueDescription(e.target.value)}
          className="border border-gray-300 rounded-md p-2 resize-none"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="appointmentDate" className="font-bold">
          {t('appointmentDate')}
        </label>
        <input
          type="date"
          id="appointmentDate"
          value={appointmentDate}
          onChange={(e) => setAppointmentDate(e.target.value)}
          className="border border-gray-300 rounded-md p-2"
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
      >
        {isSubmitting ? t('booking') : t('bookRepair')}
      </button>
      {submitError && (
        <div className="text-red-500">{submitError}</div>
      )}
      {submitSuccess && (
        <div className="text-green-500">{t('bookingSuccess')}</div>
      )}
    </form>
  );
};

export default BookingForm;