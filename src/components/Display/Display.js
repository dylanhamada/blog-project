import React from 'react';

import classes from './Display.module.css';
import TitleDisplay from './TitleDisplay/TitleDisplay';
import DateDisplay from './DateDisplay/DateDisplay';
import TextDisplay from './TextDisplay/TextDisplay';

const Display = props => {
    return (
        <div className={classes.Display}>
            <TitleDisplay blogTitle="Some Blog Title" />
            <DateDisplay blogDate="Some Blog Date" />
            <TextDisplay blogText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis consequat nunc, at sollicitudin sem tristique sit amet. Fusce at convallis ligula. Aliquam finibus sit amet nunc in posuere. Integer quis pulvinar arcu. Vivamus a molestie tellus, non rhoncus neque. Nam suscipit lorem dapibus magna pretium efficitur. Fusce id tellus rutrum, accumsan tortor non, fermentum nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor a ipsum vel euismod. Aliquam eget dolor libero. Integer blandit at dui consequat volutpat. Mauris ut lobortis orci. Integer faucibus diam quis fringilla molestie." />
        </div>
    );
}

export default Display;