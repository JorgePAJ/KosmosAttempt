interface Props {
  label: string;
  list: string[];
  setType: any;
}

export default function RadioGroup(props: Props) {
  return (
    <div>
      <label className="text-base font-medium text-gray-900">
        {props.label}
      </label>

      <fieldset className="mt-4">
        <legend className="sr-only">Notification method</legend>
        <div className="space-y-4">
          {props.list.map((option: any) => (
            <div key={option.id} className="flex items-center">
              <input
                id={option.id}
                name="notification-method"
                type="radio"
                defaultChecked={option.id === "email"}
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label
                htmlFor={option.id}
                className="ml-3 block text-sm font-medium text-gray-700"
              >
                {option}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  );
}
