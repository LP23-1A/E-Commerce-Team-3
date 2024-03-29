const statusCellStyle = (status:any) => {
    switch (status) {
      case 'Ordered':
        return { backgroundColor: '#ff6347' }; 
      case 'Preparing to ship':
        return { backgroundColor: '#ECEDFA' }; 
      case 'Shipped':
        return { backgroundColor: '#B7DDFF' }; 
      case 'Delivered':
        return { backgroundColor: '#C1E6CF' }; 
        case 'Cancelled':
            return { backgroundColor: '#FCBABE' };
      default:
        return {};
    }
  };
  export default statusCellStyle