import React from 'react';

// COMPONENTS
import './Calculator.css';
import InputFields from '../InputField/InputFields';
import ResultPage from '../ResultPage/ResultPage';

class Calculator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            // GENERAL STATE HANDLERS
            isSubmited: false,

            // FIELD STATE
            businessDays:'',
            numOfWorkedHours: '',
            grossSalary: '',
            extraTargetSalary: '',
            extraOvertimeSalary: '',

            // RESULT STATES
            salarySum: '',

            // RESULT STATES
            numberOfOvertimes: '',
            numberOfHoursForTarget: '',
            numberToBePaid: ''

        };
        this.inputHandlerDays = this.inputHandlerDays.bind(this);
        this.handleCalculateSalary = this.handleCalculateSalary.bind(this);
    }

    // HANDLES INPUT -> how to decide
    inputHandlerDays(event) {
        const value = event.target.value;
        this.setState({
            [event.target.name]: value
        })
        console.log(this.state.grossSalary)
    }

    // CALCULATES GROSS SALARY
    handleCalculateSalary() {
        const isHourslyCalculated = eval(this.state.grossSalary / 168);
        const totalSalaryRaw = eval(isHourslyCalculated * this.state.numOfWorkedHours)
        const totalSalary = totalSalaryRaw
        const overtimes = eval(this.state.numOfWorkedHours - this.state.businessDays * 8)

        const calculateTarget = eval(this.state.extraTargetSalary / isHourslyCalculated)

        this.setState({
            salarySum: totalSalary,
            isSubmited: true,
            numberOfOvertimes: overtimes,
            numberOfHoursForTarget: calculateTarget

        })

    }

    render() {

        const formatNumber = (num) => {
            return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
          }


        return(
            <div className="container">
                <div className="form">
                    <p className="p-header">Count your salary</p>
                    <InputFields onChange={this.inputHandlerDays}/>
                    <div className="btn-container">
                        <p>This data is provided by the seller. We encourage you to verify financial claims. Request a video walkthrough, an income tax return, or more information. Contact Seller to request and verify information.</p>
                        <button 
                            className="button-submit"
                            onClick={this.handleCalculateSalary}>Calculate</button>
                    </div>
                </div>
                <p></p>
                {this.state.isSubmited ?
                    <ResultPage 
                        salarySum={formatNumber(this.state.salarySum)}
                        numOfWorkedHours={this.state.numOfWorkedHours}
                        numberOfOvertimes={this.state.numberOfOvertimes}
                        numberOfHoursForTarget={this.state.numberOfHoursForTarget}
                        numberToBePaid={this.state.numberToBePaid}
                        /> : '' }
            </div>
        )
    }
}

export default Calculator;