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
      // Reset form
      setName('');
      setMachineModel('');
      setIssueDescription('');
      setAppointmentDate('');
    } catch (error) {
      setSubmitError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-semibold text-gray-700">
          {t('name')}
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-gray-50 border-gray-200 focus:bg-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
          placeholder="John Doe"
          required
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="machineModel" className="text-sm font-semibold text-gray-700">
          {t('machineModel')}
        </label>
        <input
          type="text"
          id="machineModel"
          value={machineModel}
          onChange={(e) => setMachineModel(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-gray-50 border-gray-200 focus:bg-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
          placeholder="e.g., Samsung WW90"
          required
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="issueDescription" className="text-sm font-semibold text-gray-700">
          {t('issueDescription')}
        </label>
        <textarea
          id="issueDescription"
          value={issueDescription}
          onChange={(e) => setIssueDescription(e.target.value)}
          rows="4"
          className="w-full px-4 py-3 rounded-xl bg-gray-50 border-gray-200 focus:bg-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none resize-none"
          placeholder="Please describe the noise, error code, or issue..."
          required
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="appointmentDate" className="text-sm font-semibold text-gray-700">
          {t('appointmentDate')}
        </label>
        <input
          type="date"
          id="appointmentDate"
          value={appointmentDate}
          onChange={(e) => setAppointmentDate(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-gray-50 border-gray-200 focus:bg-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
          required
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-4 rounded-xl font-bold text-white shadow-lg transition-all transform hover:-translate-y-1 ${isSubmitting
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:shadow-blue-500/30'
          }`}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            {t('booking')}
          </span>
        ) : t('bookRepair')}
      </button>

      {submitError && (
        <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium">
          {submitError}
        </div>
      )}

      {submitSuccess && (
        <div className="p-4 bg-green-50 text-green-600 rounded-xl text-sm font-medium flex items-center gap-2">
          <span>✅</span> {t('bookingSuccess')}
        </div>
      )}
    </form>
  );
};

export default BookingForm;