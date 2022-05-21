namespace $.$$ {

	export class $hyoo_ergo_proposal_new extends $.$hyoo_ergo_proposal_new {

		thesis_id() {
			return this.thesis().id()
		}

		publish_enabled() {
			return this.reason().length > 0 && this.what().length > 0
		}

		clear() {
			this.what('')
			this.reason('')
		}

		publish() {
			const obj = new this.$.$hyoo_ergo_proposal
			obj.id = $mol_const($mol_guid())
			obj.domain = $mol_const(this.domain())
			obj.moment(new $mol_time_moment)
			obj.creator(this.domain().user())
			obj.status('opened')
			obj.what(this.what())
			obj.reason(this.reason())

			this.thesis().proposals( [...this.thesis().proposals(), obj] )

			this.clear()
		}

	}

}
