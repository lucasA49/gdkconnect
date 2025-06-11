export default function Calendar() {
  return (
    <div className="flex justify-center mt-12 mb-12">
      <iframe
        src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1FVnN46cwxCm79NN4UJzFRLQU31PWhZVDlm7ArfJXH7toKcGDQ-rxFRVOsro5Du-rcdm8J1F9R?gv=true"
        style={{ border: 0 }}
        className="w-[90%] h-[600px]"
        frameBorder="0"
      ></iframe>
    </div>
  );
}
