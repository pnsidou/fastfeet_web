import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Table from '~/components/Table';
import TableFrame from '~/components/TableFrame';
import { columns } from './styles';

import { listProblems } from '~/store/modules/problems/actions';

function Problems() {
  const dispatch = useDispatch();
  const history = useHistory();

  const problems = useSelector(state => {
    const problems = state.problems.list;
    return problems.map(problem => {
      const { id, delivery_id } = problem;
      const delivery = state.deliveries.list.find(
        delivery => delivery.id === delivery_id
      );

      const actions = [
        {
          type: 'edit',
          handler: () => history.push(`/problems/${id}/update`),
        },
        {
          type: 'delete',
          handler: () => {},
        },
      ];

      return {
        ...problem,
        name: delivery && delivery.recipient && delivery.recipient.name,
        actions,
      };
    });
  });

  const handleSearch = query => {
    dispatch(listProblems(query));
  };

  useEffect(() => {
    dispatch(listProblems());
  }, [dispatch]);

  return (
    <TableFrame
      title="Problems"
      searchPlaceholder="Search problems by recipient..."
      handleSearch={handleSearch}
      registerButtonHandler={() => history.push('/problems/register')}
    >
      <Table columns={columns} data={problems} />
    </TableFrame>
  );
}

export default Problems;
