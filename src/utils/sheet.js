import XLSX from 'xlsx';
import endsWith from 'lodash/endsWith';

export const rowHeaderDefault = [
  { readOnly: true, value: '' },
  { readOnly: true, width: '20%', value: '计算式(m)' },
  { readOnly: true, width: '10%', value: '形状' },
  { readOnly: true, width: '10%', value: '直径(mm)' },
  { readOnly: true, width: '10%', value: '根数' },
  { readOnly: true, width: '10%', value: '断料长(m)' },
  { readOnly: true, width: '10%', value: '总长(m)' },
  { readOnly: true, width: '10%', value: '单位重(kg/m)' },
  { readOnly: true, width: '10%', value: '总重量(kg)' },
  { readOnly: true, width: '10%', value: '备注' },
];

export const rowDefault = [
  { readOnly: true, value: '' },
  { value: '' },
  { value: '' },
  { value: '' },
  { value: '' },
  { readOnly: true, value: 0 },
  { readOnly: true, value: 0 },
  { readOnly: true, value: 0 },
  { readOnly: true, value: 0 },
  { value: '' },
];

const countDefault = 50;

export const rowsAddDefault = () => {
  let result = [];
  for (let i = 0; i < countDefault; i++) {
    result.push(rowDefault);
  }

  return result;
};

export const exportFile = (data, options = {}) => {
  /* convert state to workbook */
  const ws = XLSX.utils.aoa_to_sheet(data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

  const extension = '.xlsx';
  let filename = options.filename || 'Sheet';
  filename =  endsWith(filename, extension) ? filename : `${filename}${extension}`;
  /* generate XLSX file and send to client */
  XLSX.writeFile(wb, filename);
};
