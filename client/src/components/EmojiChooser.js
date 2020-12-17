import React from 'react'
import {EmojiButton} from '@joeattardi/emoji-button';

export default class EmojiChooser extends React.Component {

    triggerRef = React.createRef();

    componentDidMount() {
        this.picker = new EmojiButton({
            style: 'native',
            rootElement: this.props.rootElement.target,
            showCategoryButtons: false,
            showSearch: false,
            showPreview: false,
            showRecents: false
        });
        this.picker.on('emoji', this.onSelect);
    }

    componentWillUnmount() {
        this.picker.destroyPicker();
    }

    onTrigger = (ev) => {
        ev.preventDefault();
        this.picker.togglePicker(this.triggerRef.current);
    }

    onSelect = (selection) => {
        this.props.onSelect(selection);
        this.picker.hidePicker();
    }

    render() {
        return (
            <button
                ref={this.triggerRef}
                onClick={this.onTrigger}
            >
                {this.props.children}
            </button>
        );
    }
}
