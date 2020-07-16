// Framework and third-party non-ui
import React from 'react';

// App components
import TrailCard from 'components/TrailCard';

// JSON & Styles

// Third-party components (buttons, icons, etc.)
import { VariableSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';

const getItemSize = (index) => 125;

const TrailsList = () => {
  const Row = ({ index, style }) => <TrailCard style={style} />;

  return (
    <AutoSizer>
      {({ height, width }) => (
        <List
          width={width}
          height={height}
          itemCount={25}
          itemSize={getItemSize}
          estimatedItemSize={125}
        >
          {Row}
        </List>
      )}
    </AutoSizer>
  );
};

export default TrailsList;
