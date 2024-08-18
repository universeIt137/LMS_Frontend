/* eslint-disable react/prop-types */

const InputLabel = ({ text }) => {
    return (
        <label className="text-base sm:text-lg font-semibold text-gray-900">
            {text}
        </label>
    );
};

export default InputLabel;