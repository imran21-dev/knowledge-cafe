import PropTypes from "prop-types";

const SpendTime = ({timeCount}) => {
    return (
        <div className="bg-violet-100 text-violet-600 text-center font-bold text-xl rounded-lg px-11 py-5 mb-3 border-violet-600 border">
           <h1>Spent time on read : {timeCount} min</h1>
        </div>
    );
};
SpendTime.propTypes = {

    timeCount: PropTypes.number.isRequired
}
export default SpendTime;