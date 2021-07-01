import React from "react"

const BarHumedity = ({humidity}) => {

    const porcentaje = 229 * (humidity / 100)
    const styles = { width: porcentaje }

    return (
        <div className="BarHumedity">
            <div className="BarHumedity__indicators">
                <span>0</span>
                <span>50</span>
                <span>100</span>
            </div>
            <div>
            </div>
            <div className="BarHumedity__total">
                <div
                className="BarHumedity_current"
                style={styles}
            ></div>
            </div>
            <strong className="BarHumedity__percentage">%</strong>
        </div>
    )
}

export default BarHumedity
