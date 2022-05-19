namespace $.$$ {

	export class $hyoo_ergo_request_change extends $.$hyoo_ergo_request_change {

		@ $mol_mem
		content(next?: string) {
			return this.$.$mol_state_local.value( `change#${this.thesis().id()}` , next ) ?? this.thesis().edition()?.text()!
		}

		publish() {
			const edition = this.domain().edition( $mol_guid() )
			const request = this.domain().request( $mol_guid() )

			edition.version_prev(this.thesis().edition()!)
			edition.text(this.content())
			edition.request(request)

			request.creator(this.domain().user())
			request.moment(new $mol_time_moment)
			request.edition(edition)
			request.status('review')
			request.type('change')

			this.thesis().requests( [...this.thesis().requests(), request] )
		}
	}

}
