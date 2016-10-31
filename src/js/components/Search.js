/**
 * Created by Jixiang_Li on 2016/10/31.
 */
import React, {Component} from 'react';
import {Link} from 'react-router';

class Search extends Component{
    constructor(props, context){
        super(props, context);
    }

    render(){
        const { defaultKey } = this.props;
        return (
            <div className="input-group">
                <input style={{'height': '45px'}}
                       placeholder={defaultKey}
                       className="form-control input-lg" />
                <div className="input-group-btn">
                    <Link to='/search' className="btn btn-primary btn-lg "
                                style={{'fontSize': '21px', 'height': '45px'}}>搜索</Link>

                </div>
            </div>
        )
    }
}

export default Search