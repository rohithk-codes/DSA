const ExcelJS = require('exceljs');
const fs = require('fs'); // For alternative file saving method

(async () => {
  try {
    // Create a new workbook and worksheet
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('30 Days Tracking');

    // List of names
    const names = [
      'DEVAN', 'ASWATHY', 'HRUDWIK', 'AL-AMEEN', 'BELWIN',
      'GOPIKA', 'ANAND', 'ANU', 'FELWIN', 'ROHITH'
    ];

    // Add "NAMES" header
    worksheet.getCell('A1').value = 'NAMES';
    worksheet.getCell('A1').font = { bold: true };
    worksheet.getCell('A1').alignment = { horizontal: 'center' };

    // Add names to column A (starting from A2)
    names.forEach((name, index) => {
      worksheet.getCell(`A${index + 2}`).value = name;
    });

    // Dropdown options for each column type
    const audioTaskOptions = ['YES', 'NO'];
    const ontimeSessionOptions = ['YES', 'NO'];
    const attendanceOptions = ['YES', 'LEAVE'];
    const sessionPerformanceOptions = ['ACTIVE', 'INACTIVE'];

    // Default data for each column type (for demonstration, using the same pattern as before)
    const audioTaskData = Array(names.length).fill('YES');
    const ontimeSessionData = Array(names.length).fill('YES');
    const attendanceData = ['LEAVE', 'YES', 'YES', 'YES', 'YES', 'YES', 'YES', 'YES', 'YES', 'YES'];
    const sessionPerformanceData = Array(names.length).fill('ACTIVE');

    // Color mappings for dropdown values
    const colors = {
      YES: 'FF00FF00', // Green
      NO: 'FFFF0000', // Red
      LEAVE: 'FFFF0000', // Red
      ACTIVE: 'FF00FF00', // Green
      INACTIVE: 'FFFF0000' // Red
    };

    // Border style for all dropdown cells
    const borderStyle = {
      top: { style: 'thin' },
      left: { style: 'thin' },
      bottom: { style: 'thin' },
      right: { style: 'thin' }
    };

    // Loop through 30 days
    for (let day = 1; day <= 30; day++) {
      const baseCol = (day - 1) * 4 + 2; // Starting column for each day (B for Day 1, F for Day 2, etc.)

      // Add day header (e.g., "Day 1", "Day 2", ...)
      const dayHeaderCell = worksheet.getCell(1, baseCol);
      dayHeaderCell.value = `Day ${day}`;
      worksheet.mergeCells(1, baseCol, 1, baseCol + 3);
      dayHeaderCell.font = { bold: true, size: 12 };
      dayHeaderCell.alignment = { horizontal: 'center' };

      // Add sub-headers for the day
      const headers = ['AUDIO-TASK', 'ONTIME-SESSION', 'ATTENDANCE', 'SESSION-PERFORMANCE'];
      headers.forEach((header, index) => {
        const cell = worksheet.getCell(2, baseCol + index);
        cell.value = header;
        cell.font = { bold: true };
        cell.alignment = { horizontal: 'center' };
      });

      // Add data, dropdowns, colors, and borders for each column in the day
      for (let row = 2; row <= names.length + 1; row++) {
        // AUDIO-TASK
        const audioCell = worksheet.getCell(row, baseCol);
        audioCell.value = audioTaskData[row - 2];
        audioCell.dataValidation = {
          type: 'list',
          allowBlank: true,
          formulae: ['"YES,NO"'],
        };
        audioCell.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: colors[audioCell.value] || 'FFFFFFFF' },
        };
        audioCell.border = borderStyle;

        // ONTIME-SESSION
        const ontimeCell = worksheet.getCell(row, baseCol + 1);
        ontimeCell.value = ontimeSessionData[row - 2];
        ontimeCell.dataValidation = {
          type: 'list',
          allowBlank: true,
          formulae: ['"YES,NO"'],
        };
        ontimeCell.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: colors[ontimeCell.value] || 'FFFFFFFF' },
        };
        ontimeCell.border = borderStyle;

        // ATTENDANCE
        const attendanceCell = worksheet.getCell(row, baseCol + 2);
        attendanceCell.value = attendanceData[row - 2];
        attendanceCell.dataValidation = {
          type: 'list',
          allowBlank: true,
          formulae: ['"YES,LEAVE"'],
        };
        attendanceCell.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: colors[attendanceCell.value] || 'FFFFFFFF' },
        };
        attendanceCell.border = borderStyle;

        // SESSION-PERFORMANCE
        const sessionCell = worksheet.getCell(row, baseCol + 3);
        sessionCell.value = sessionPerformanceData[row - 2];
        sessionCell.dataValidation = {
          type: 'list',
          allowBlank: true,
          formulae: ['"ACTIVE,INACTIVE"'],
        };
        sessionCell.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: colors[sessionCell.value] || 'FFFFFFFF' },
        };
        sessionCell.border = borderStyle;
      }
    }

    // Adjust column widths
    worksheet.getColumn('A').width = 15;
    for (let col = 2; col <= 121; col++) { // Columns B to BS (30 days × 4 columns)
      worksheet.getColumn(col).width = 15;
    }

    // Save the file using buffer method to avoid corruption
    const buffer = await workbook.xlsx.writeBuffer();
    fs.writeFileSync('30DaysTracking.xlsx', buffer);
    console.log('Excel file created successfully! Check 30DaysTracking.xlsx in your project folder.');
  } catch (error) {
    console.error('Error creating Excel file:', error.message);
  }
})();