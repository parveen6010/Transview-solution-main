import React from "react";

import { useNavigate } from 'react-router-dom';

function Temp2() {
  const navigator = useNavigate();
 const   ewaybill = () =>{
  navigator("/green-form");
 }
     const homego = ()=>{
      navigator("/");
     }

  return (
    <div className="bg-white flex flex-col justify-center items-center m-5">
      <h2 className="text-3xl font-bold text-green-500 mb-10">
        E-WAYBILL ENTRY FORM
      </h2>
      <div className="">
        <div className="flex flex-col justify-center bg-gray-200 pb-2">
          <h4 className="text-1xl font-bold text-white w-full bg-green-500 p-2">
            Transaction Details
          </h4>
          <div className="p-2">
          <div className="flex w-full justify-between mb-2 mt-2">
            <div className="pl-2 mb-2">
              <label htmlFor="supplyType" className="mr-3" required>
                Supply Type
              </label>
              <input
                type="radio"
                name="supplyType"
                value="Outward"
                className="mr-2"
              />
              OutWard
              <input
                type="radio"
                name="supplyType"
                value="Inward"
                className="ml-2 mr-2"
              />
              InWard
            </div>
            <div className="pr-4">
              <label htmlFor="subType" className="mr-3" required>
                Sub Type
              </label>
              <input
                type="radio"
                name="subType"
                value="Supply"
                className="mr-2"
              />
              Supply
              <input
                type="radio"
                name="subType"
                value="Export"
                className="ml-2 mr-2"
              />
              Export
              <input
                type="radio"
                name="subType"
                value="JobWork"
                className="ml-2 mr-2"
              />
              Job Work
              <input
                type="radio"
                name="subType"
                value="SKD"
                className="ml-2 mr-2"
              />
              SKD/CKD/Lots
              <input
                type="radio"
                name="subType"
                value="RecipentNotKnown"
                className="ml-2 mr-2"
              />
              Recipent Not Known
              <input
                type="radio"
                name="subType"
                value="ForOwnUse"
                className="ml-2 mr-2"
              />
              For Own Use
              <input
                type="radio"
                name="subType"
                value="Exhibition"
                className="ml-2 mr-2"
              />
              Exhibition or Fairs
              <input
                type="radio"
                name="subType"
                value="LineSales"
                className="ml-2 mr-2"
              />
              Line Sales
              <input
                type="radio"
                name="subType"
                value="Others"
                className="ml-2 mr-2"
              />
              Others
            </div>
            </div>
       

          <div className="pl-2 mb-2 mt-2 flex justify-between">
            <div className="docType">
              <label htmlFor="docType" className="mr-2">Document Type</label>
              <select name="docType" required>
                <option value="TaxInvoice">Tax Invoice</option>
                <option value="TaxInvoice">Tax Invoice</option>
                <option value="TaxInvoice">Tax Invoice</option>
                <option value="TaxInvoice">Tax Invoice</option>
                <option value="TaxInvoice">Tax Invoice</option>
              </select>
            </div>
            <div className="docNum">
              <label htmlFor="docNum" className="mr-2">Document No.</label>
              <input type="number" name="docNum" className="DocNum" />
            </div>
            <div className="docdate">
              <label htmlFor="docDate" className="mr-2">Document No.</label>
              <input type="date" name="docDate" className="DocDate" />
            </div>
            <div className="pr-4">
              <label htmlFor="TransactionType" className="mr-2">Transaction Type</label>
              <select name="TransactionType" required>
                <option value="Regular">Regular</option>
                <option value="Regular">Regular</option>
                <option value="Regular">Regular</option>
                <option value="Regular">Regular</option>
                <option value="Regular">Regular</option>
              </select>
            </div>
          </div>
          </div>
        </div>
        {/* Bill dipatch section */}
        <div className="flex justify-between  pb-2 mt-2">
          <div className="BillFrom mr-2 bg-gray-200 w-1/2 ">
            <h2 className="text-1xl font-bold text-white w-full bg-green-500 p-2">Bill From</h2>
            <div className="p-2">
              <tr className="NameContainer">
                <td className="pr-4">Name</td>
                <td>
                  <input type="text" className="Name" name="BillFromName" />
                </td>
              </tr>
              <tr className="GSTContainer">
                <td>GSTIN</td>
                <td>
                  <input type="text" className="GSTField" name="BillFromGst" />
                </td>
              </tr>
              <tr className="stateContainer">
                <td>State</td>
                <td>
                  <select name="BillFromState" required>
                    <option value="State">State</option>
                    <option value="State">State</option>
                    <option value="State">State</option>
                    <option value="State">State</option>
                    <option value="State">State</option>
                  </select>
                </td>
              </tr>
            </div>
          </div>
          <div className="DispatchFrom  bg-gray-200 w-1/2">
            <h2 className="text-1xl font-bold text-white w-full bg-green-500 p-2 ">Dispatch From</h2>
            <div className="p-2">
              <tr className="AddressContainer pb-5">
                <td className="pr-4">Address</td>
                <td>
                  <input
                    type="text"
                    className="AddressA mr-4"
                    name="DispatchFromAddressA"
                  />
                  <input
                    type="text"
                    className="AddressB "
                    name="DispatchFromAddressB"
                  />
                </td>
              </tr>
              <tr className="PlaceContainer">
                <td>Place</td>
                <td>
                  <input
                    type="text"
                    className="Place"
                    name="DispatchFromPlace"
                  />
                </td>
              </tr>
              <tr className="PincodeContainer">
                <td>Pincode</td>
                <td>
                  <input
                    type="number"
                    className="Pincode mr-4"
                    name="DispatchFromPincodeNum"
                  />
                  <select name="DispatchFromPincodeDd" required>
                    <option value="State">State</option>
                    <option value="State">State</option>
                    <option value="State">State</option>
                    <option value="State">State</option>
                    <option value="State">State</option>
                  </select>
                </td>
              </tr>
            </div>
          </div>
        </div>
        {/* bill ship section  */}
        <div className="flex justify-between  pb-2 mt-2">
          <div className=" mr-2 bg-gray-200 w-1/2">
            <h2 className="text-1xl font-bold text-white w-full bg-green-500 p-2">Bill To</h2>
            <div className="p-2">
              <tr className="NameContainer">
                <td>Name</td>
                <td>
                  <input type="text" className="Name" name="BillToName" />
                </td>
              </tr>
              <tr className="GSTContainer">
                <td>GSTIN</td>
                <td>
                  <input type="text" className="GSTField" name="BillToGst" />
                </td>
              </tr>
              <tr className="stateContainer">
                <td>State</td>
                <td>
                  <select name="BillToState" required>
                    <option value="State">State</option>
                    <option value="State">State</option>
                    <option value="State">State</option>
                    <option value="State">State</option>
                    <option value="State">State</option>
                  </select>
                </td>
              </tr>
            </div>
          </div>
          <div className=" mr-2 bg-gray-200 w-1/2">
            <h2 className="text-1xl font-bold text-white w-full bg-green-500 p-2">Ship To</h2>
            <div className="p-2">
              <tr className="AddressContainer">
                <td>Address</td>
                <td>
                  <input
                    type="text"
                    className="AddressA"
                    name="ShipToAddressA"
                  />
                  <input
                    type="text"
                    className="AddressB"
                    name="ShipToAddressB"
                  />
                </td>
              </tr>
              <tr className="PlaceContainer">
                <td>Place</td>
                <td>
                  <input type="text" className="Place" name="ShipToPlace" />
                </td>
              </tr>
              <tr className="PincodeContainer">
                <td>Pincode</td>
                <td>
                  <input
                    type="number"
                    className="Pincode"
                    name="ShipToPincodeNum"
                  />
                  <select name="ShipToPincodeDd" required>
                    <option value="State">State</option>
                    <option value="State">State</option>
                    <option value="State">State</option>
                    <option value="State">State</option>
                    <option value="State">State</option>
                  </select>
                </td>
              </tr>
            </div>
          </div>
        </div>
        {/* Item  */}
        <div className="mr-2 bg-gray-200 ">
          <h2 className="text-1xl font-bold text-white w-full bg-green-500 p-2">Item Details</h2>
          <div className="p-2">
            <table className="ProductTable">
              <tr>
                <th>Product Name</th>
                <th>Description</th>
                <th>HSN</th>
                <th>Quantity</th>
                <th>Unit</th>
                <th>Valuable/Taxable Value(Rs.)</th>
                <th>CGST+SGST Rate(%)</th>
                <th>IGST Rate(%)</th>
                <th>CESS Advol Rate(%)</th>
                <th>CESS non Advol Rate</th>
                <th>+</th>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    className="ProductName"
                    name="ProductName"
                    placeholder="Name"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="ProductDescription"
                    name="ProductDescription"
                    placeholder="Description"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="ProductHSN"
                    name="ProductHSN"
                    placeholder="HSN"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="ProductQuantity"
                    name="ProductQuantity"
                    placeholder="Quantity"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="ProductUnit"
                    name="ProductUnit"
                    placeholder="Unit"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="ProductTaxableValue"
                    name="ProductTaxableValue"
                    placeholder="Taxable Value"
                  />
                </td>
                <td>
                  <select name="ProductCGST" required>
                    <option value="CGST">CGST</option>
                    <option value="CGST">CGST</option>
                    <option value="CGST">CGST</option>
                    <option value="CGST">CGST</option>
                    <option value="CGST">CGST</option>
                  </select>
                </td>
                <td>
                  <select name="ProductIGST" required>
                    <option value="IGST">IGST</option>
                    <option value="IGST">IGST</option>
                    <option value="IGST">IGST</option>
                    <option value="IGST">IGST</option>
                    <option value="IGST">IGST</option>
                  </select>
                </td>
                <td>
                  <select name="ProductCESSAdvol" required>
                    <option value="CESS">CESS</option>
                    <option value="CESS">CESS</option>
                    <option value="CESS">CESS</option>
                    <option value="CESS">CESS</option>
                    <option value="CESS">CESS</option>
                  </select>
                </td>
                <td>
                  <select name="ProductCESSNonAdvol" required>
                    <option value="CESSNonAdvol">CESS Non Advol</option>
                    <option value="CESSNonAdvol">CESS Non Advol</option>
                    <option value="CESSNonAdvol">CESS Non Advol</option>
                    <option value="CESSNonAdvol">CESS Non Advol</option>
                    <option value="CESSNonAdvol">CESS Non Advol</option>
                  </select>
                </td>
                <td>Delete</td>
              </tr>
            </table>
          </div>
          <div className="p-2">
            <table className="TotalTaxTable">
              <tr>
                <th>Total Taxable Amount</th>
                <th>CGST Amount</th>
                <th>SGST Amount</th>
                <th>IGST Amount</th>
                <th>CESS Advol Amount</th>
                <th>CESS Non Advol Amount</th>
                <th>Other Amount (+/-)</th>
                <th>Total Inv. Amount</th>
              </tr>
              <tr>
                <td>
                  <input
                    type="number"
                    className="TotalTaxableAmount"
                    name="TotalTaxableAmount"
                    disabled
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="CGSTAmount"
                    name="CGSTAmount"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="SGST Amount"
                    name="SGST Amount"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="IGSTAmount"
                    name="IGSTAmount"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="CESSAdvolAmount"
                    name="CESSAdvolAmount"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="CESSNonAdvolAmount"
                    name="CESSNonAdvolAmount"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="OtherAmount"
                    name="OtherAmount"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="TotalInvAmount"
                    name="TotalInvAmount"
                  />
                </td>
              </tr>
            </table>
          </div>
        </div>
        {/* transportation container */}
        <div className="mt-2 bg-gray-200 ">
          <h2 className="text-1xl font-bold text-white w-full bg-green-500 p-2">Transportation Details</h2>
          <div className="p-4 flex justify-between">
          <label htmlFor="TransporterID">Transporter ID</label>
          <input type="text" className="TransporterId" name="TransporterID" />
          <label htmlFor="TransporterName">Transporter Name</label>
          <input
            type="text"
            className="TransporterName"
            name="TransporterName"
            placeholder="Name"
          />
          <label htmlFor="PinToPin">Auto Calculated PIN to PIN (in KM)</label>
          <input
            type="text"
            className="PinToPin"
            name="PinToPin"
            placeholder="Name"
            value={1234}
            disabled
          />
          <label htmlFor="ApproxDist">Approximate Distance (in KM)</label>
          <input type="text" className="ApproxDist" name="ApproxDist" />
        </div>
        </div>
        {/* Part B */}
        <div className="mt-2 bg-gray-200 ">
          <h2 className="text-1xl font-bold text-white w-full bg-green-500 p-2">PART-B</h2>
          <table>
            <tr>
              <td>
                <label htmlFor="Mode" required>
                  Mode
                </label>
                <input type="radio" name="Mode" value="Road" />
                Road
                <input type="radio" name="Mode" value="Rail" />
                Rail
                <input type="radio" name="Mode" value="Air" />
                Air
                <input type="radio" name="Mode" value="Ship" />
                Ship or Ship Cum Road/Rail
                <label htmlFor="VehicleType" required>
                  Vehicle Type
                </label>
                <input type="radio" name="VehicleType" value="Regular" />
                Regular
                <input
                  type="radio"
                  name="VehicleType"
                  value="Over Dimensional Cargo"
                />
                Over Dimensional Cargo
              </td>
            </tr>
            <tr>
              <label htmlFor="VehicleNum" required>
                Vehicle No.
              </label>
              <input type="number" className="VehicleNum" name="VehicleNum" />
              <label htmlFor="TransporterDoc" required>
                Transporter Doc. No. & Date
              </label>
              <input
                type="number"
                className="TransporterDoc"
                name="TransporterDoc"
              />
              <input
                type="date"
                className="TransporterDate"
                name="TransporterDate"
              />
            </tr>
          </table>
          
        </div>
        <div className="flex justify-center m-10 bg-white">
            <button type="button"  className='border-2 border-green-500 bg-green-500 text-white rounded-full px-12 py-2 inline-block font-semibold  hover:bg-white hover:text-green-500 mr-4'>
              Preview
            </button>
            <button type="submit"  className='border-2 border-green-500 bg-green-500 text-white rounded-full px-12 py-2 inline-block font-semibold  hover:bg-white hover:text-green-500 ml-2 mr-2'
            onClick={ewaybill} 
            >
             Submit
            </button>
            <button type="button"  className='border-2 border-green-500 bg-green-500 text-white rounded-full px-12 py-2 inline-block font-semibold  hover:bg-white hover:text-green-500 ml-2'
            onClick={homego}
            >
              Exit
            </button>
          </div>
      </div>
    </div>
  );
}

export default Temp2;
