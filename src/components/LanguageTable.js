import React from 'react';

function LanguageTable() {

    let styled = {
          color: "#B4202A",
          fontWeight: "900"  
    };

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th colSpan="2">English, German, French</th>
                    </tr>
                    <tr>
                        <td colSpan="2">understanding</td>
                    </tr>
                    <tr>
                        <td>listening</td>
                        <td>reading</td>
                    </tr>
                    <tr style={styled}>
                        <td>C1</td>
                        <td>C1</td>
                    </tr>
                    <tr>
                        <td colSpan="2">speaking</td>
                    </tr>
                    <tr>
                        <td>spoken interaction</td>
                        <td>spoken production</td>
                    </tr>
                    <tr style={styled}>
                        <td>C1</td>
                        <td>C1</td>
                    </tr>
                    <tr>
                        <td colSpan="2">writing</td>
                    </tr>
                    <tr>
                        <td style={styled} colSpan="2">C1</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
};

export default LanguageTable;