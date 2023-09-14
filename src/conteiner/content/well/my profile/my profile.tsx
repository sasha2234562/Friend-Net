import React, {ChangeEvent} from "react";

type StateType = {
    status: boolean;
    value: string;
};

export class MyProfile extends React.Component<{ status: string, updateStatus: (status: string) => void }, StateType> {


    state: StateType = {
        status: true,
        value: this.props.status,
    };

    onDoubleClick() {
        this.setState({status: false});
    };

    onBlur() {
        this.setState({status: true});
        this.props.updateStatus(this.state.value)
    };

    saveClick() {
        this.setState({status: true});
    }

    onChange(e: ChangeEvent<HTMLInputElement>) {
        this.setState({
            value: e.currentTarget.value
        })
    };

    // componentDidUpdate(prevProps: any, prevState: any) {
    //     // debugger
    //     if (prevProps.status !== prevState.value) {
    //         this.setState({
    //             value: this.props.status
    //         })
    //     }
    // }

    render() {
        return (
            <div style={{margin: '3%'}}>
                {this.state.status ? (
                    <div onDoubleClick={this.onDoubleClick.bind(this)} style={{
                        fontSize: '22px'
                    }}>
                        <span>{this.props.status.toString()}</span>
                    </div>
                ) : (
                    <div onBlur={this.onBlur.bind(this)}>
                        <div>
                            <input
                                type="text"
                                value={this.state.value}
                                onChange={this.onChange.bind(this)}
                                placeholder={this.props.status}
                                autoFocus/>
                        </div>
                        <div style={{margin: '11px 0 0 15px'}}>
                            <button onClick={this.saveClick.bind(this)} style={{
                                backgroundColor: 'blue',
                                color: 'white',
                                padding: '7px 11px'
                            }}>Save
                            </button>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}