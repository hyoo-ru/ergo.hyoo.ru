namespace $.$$ {

	export class $hyoo_ergo_request_change extends $.$hyoo_ergo_request_change {

		@ $mol_mem
		content(next?: string) {
			return this.$.$mol_state_local.value( `change#${this.thesis().id()}` , next ) ?? this.thesis().edition()?.content()!
		}

		publish() {
			const edition = this.domain().edition( $mol_guid() )
			const request = this.domain().request( $mol_guid() )

			edition.prev(this.thesis().edition())
			edition.content(this.content())
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
