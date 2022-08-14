/* eslint-disable no-shadow */
import React, { useEffect } from 'react';
import { Typography } from '@mui/material';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BasicTable } from '../../../components/Table/index';
import { videoCreator } from '../../../state/index';

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

  const tableHeaders = ['Thumbnail', 'Video Title', 'User Name', 'Upload Date', 'Views', 'Comments', 'Likes', 'Edit', 'Delete'];

  const tableBodies = [
    {
      type: 'video',
    },
    'title',
    'userName',
    'uploadDate',
    'views',
    'comments',
    'likes',
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
    <>
      <Typography
        variant="h6"
        color="#000000"
        noWrap
        sx={{ flexGrow: 1, fontWeight: 'bold' }}
      >
        Videos
      </Typography>
      <BasicTable
        data={state.videos}
        tableHeaders={tableHeaders}
        tableBodies={tableBodies}
      />
    </>

  );
}
export default Videos;
