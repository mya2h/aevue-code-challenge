import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { Typography, Box, IconButton } from '@mui/material';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

function TablePaginationActions(props) {
  const theme = useTheme();
  const {
    count, page, rowsPerPage, onPageChange,
  } = props;

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? (
          <>
            {' '}
            <Typography variant="caption" display="block" gutterBottom>
              Next
            </Typography>
            <KeyboardArrowRight />
          </>
        )
          : (
            <>
              <Typography variant="caption" display="block" gutterBottom>
                Prev
              </Typography>
              <KeyboardArrowLeft />
            </>
          )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? (
          <>
            <Typography variant="caption" display="block" gutterBottom>
              Prev
            </Typography>
            <KeyboardArrowLeft />
          </>
        )
          : (
            <>
              <Typography variant="caption" display="block" gutterBottom>
                Next
              </Typography>
              <KeyboardArrowRight />
            </>
          ) }
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

export default TablePaginationActions;
