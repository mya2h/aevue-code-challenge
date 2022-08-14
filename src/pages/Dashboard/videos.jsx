/* eslint-disable react/button-has-type */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import StickyHeadTable from '../../components/Table/BasicTable';
import { videoCreator } from '../../state/index';

function Videos() {
  const state = useSelector((state) => state.video);

  const dispatch = useDispatch();

  const { getVideos } = bindActionCreators(videoCreator, dispatch);
  useEffect(() => {
    getVideos();
  }, []);

  const deleteRow = () => {

  };
  const editRow = () => {

  };

  const tableHeaders = ['Food (100g serving)', 'Calories', 'Fat (g)', 'Carbs (g)', 'Protein (g)', 'Edit', 'Delete'];

  const tableBodies = [
    'name',
    'calories',
    'fat',
    'carbs',
    'protein',
    {
      action: { editRow },
      icon: <EditIcon color="primary" />,
    },
    {
      action: { deleteRow },
      icon: <DeleteIcon />,
    },
  ];

  return (
    <Paper>
      <StickyHeadTable
        data={state.videos}
        tableHeaders={tableHeaders}
        tableBodies={tableBodies}
      />
    </Paper>
  );
}
export default Videos;
