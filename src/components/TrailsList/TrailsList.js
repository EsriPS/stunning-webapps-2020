// Framework and third-party non-ui
import React, { useContext } from 'react';

// App components
import TrailCard from 'components/TrailCard';
import { MapContext } from 'contexts/MapContext';

// JSON & Styles

// Third-party components (buttons, icons, etc.)
import { VariableSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';

const getItemSize = (index) => 125;

const TrailsList = () => {
  const { featureList, setSelection } = useContext(MapContext);

  // TODO: needs polish
  if (!featureList.length) return 'No features found!';

  const Row = ({ index, style }) => {
    const attributes = featureList[index].attributes;
    return (
      <TrailCard
        style={style}
        attributes={attributes}
        setSelection={setSelection}
      />
    );
  };

  return (
    <AutoSizer>
      {({ height, width }) => (
        <List
          width={width}
          height={height}
          itemCount={featureList.length}
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
