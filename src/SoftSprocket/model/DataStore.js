
function QueryStringTemplateReplace (str, args) {
	var str2 = str;
	for (var key in args) {
		if (args.hasOwnProperty (key)) {
			str2 = str.replace ("{{" + key + "}}", args[key]);
		}
	}

	return str2;
}

class GetJsonRequest {
	/**
	* props = {
	* 	url: string (required)
	*/
	constructor (props) {
		this.request = new XMLHttpRequest ();
		this.request.onload = function () {
			this.status = this.request.status;
			this.statusText = this.request.statusText;
			this.rawResponse = this.request.responseText;

			if (this.status >= 200 && this.status < 300) {
				this.obj = JSON.parse (this.rawResponse);
			} 

			props.onload (this.obj);
		}.bind(this);

		this.request.open ("GET", props.url);

		this.request.send ();
	
	}

}

class PostJsonRequest {
	/**
	* props = {
	* 	url: string (required)
	* 	data: string (optional)
	*/
	constructor (props) {
		this.request = new XMLHttpRequest ();
		this.request.onload = function () {
			this.status = this.request.status;
			this.statusText = this.request.statusText;
			this.rawResponse = this.request.responseText;

			if (this.status >= 200 && this.status < 300) {
				this.obj = JSON.parse (this.rawResponse);
			} 

			props.onload (this.obj);
		}.bind(this);

		this.request.open ("POST", props.url);

		this.request.send (props.data);
	
	}

}

class QueryString {
	// props.queryStrTmpl || props.queryStr
	constructor (props) {
		this.queryStrTmpl = props.queryStrTmpl;
		this.queryStr = props.queryStr;
	}

	// if using queryStrTmpl call setArgs to instantiate
	setArgs (queryStrArgs) {
		this.queryStrArgs = queryStrArgs;

		this.queryStr = QueryStringTemplateReplace (this.queryStrTmpl, this.queryStrArgs);
	}

	get () {
		return this.queryStr;
	}
}

class DataStore {

	// required props.url
	// optional props.onload and props.onupdate
	constructor (props) {
		this.url = props.url;
		this.onload = props.onload;
		this.onupdate = props.onupdate;
	}

	load (props) {
		this.get = new GetJsonRequest ({
			url: props.queryStr ? this.url + props.queryStr.get () : this.url,
			onload: function (obj) {
				this.data = obj;
				this.status = this.request.status;
				this.statusText = this.request.statusText;
				this.rawResponse = this.request.responseText;

				this.onload && this.onload (this);
			}.bind (this)
		});
	}

	update (props) {
		this.post = new PostJsonRequest ({
			url: props.queryStr ? this.url + props.queryStr.get () : this.url,
			data: props.data,
			onload: function (obj) {
				this.data = obj;
				this.status = this.request.status;
				this.statusText = this.request.statusText;
				this.rawResponse = this.request.responseText;

				this.onupdate && this.onupdate (this);
			}.bind (this)
		});
	}

}

export {
	QueryString,
	DataStore
};
