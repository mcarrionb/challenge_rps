import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { t } from 'i18next';
import './GameHistory.css';

// Define the type for game history entries
type GameHistoryEntry = {
  id: number;
  date: string;
  playerName: string;
  playerChoice: string;
  computerChoice: string;
  result: string;
};

const columnHelper = createColumnHelper<GameHistoryEntry>();

export const GameHistory: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  gameHistory: GameHistoryEntry[];
  playerName: string;
}> = ({ isOpen, onClose, gameHistory, playerName }) => {
  
  const columns = [
    columnHelper.accessor('date', {
      header: () => t('date'),
      cell: info => info.getValue(),
    }),
    columnHelper.accessor('playerName', {
      header: () => t('playerName'),
      cell: info => info.getValue(),
    }),
    columnHelper.accessor('playerChoice', {
      header: () => t('playerChoice'),
      cell: info => info.getValue(),
    }),
    columnHelper.accessor('computerChoice', {
      header: () => t('computerChoice'),
      cell: info => info.getValue(),
    }),
    columnHelper.accessor('result', {
      header: () => t('result'),
      cell: info => info.getValue(),
    }),
  ];

  const table = useReactTable({
    data: gameHistory,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const handleDownload = () => {
    const csvContent = [
      [t('date'), t('playerName'), t('playerChoice'), t('computerChoice'), t('result')],
      ...gameHistory.map(game => [
        game.date,
        game.playerName,
        game.playerChoice,
        game.computerChoice,
        game.result,
      ]),
    ]
      .map(row => row.join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'game_history.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modal"
      overlayClassName="overlay"
      contentLabel="Game History"
    >
      <div className="modal-content">
        <div className="modal-header">
          <h2>{t('gameHistory')}</h2>
          <button onClick={onClose} className="close-button">
            ×
          </button>
        </div>
        <div className="table-container">
          <table>
            <thead>
              {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map(header => (
                    <th key={header.id}>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map(row => (
                <tr key={row.id}>
                  {row.getVisibleCells().map(cell => (
                    <td key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="modal-footer">
          <button onClick={handleDownload} className="download-button">
            {t('downloadHistory')}
          </button>
        </div>
      </div>
    </Modal>
  );
}; 