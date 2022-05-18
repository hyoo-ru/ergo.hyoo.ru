namespace $.$$ {

	export class $hyoo_ergo_request_create extends $.$hyoo_ergo_request_create {

		@ $mol_mem
		content(next?: string) {
			return this.$.$mol_state_local.value( 'thesis_draft', next ) ?? ''
		}

		@ $mol_mem
		publish() {
			const edition = this.domain().edition( $mol_guid() )
			const request = this.domain().request( $mol_guid() )
			const thesis = this.domain().thesis( $mol_guid() )

			edition.content( this.content() ?? 'ops' )
			edition.request( request )

			request.creator( this.domain().user() )
			request.moment( new $mol_time_moment() )
			request.edition( edition )
			request.type( 'create' )
			request.status( 'accepted' )

			thesis.moment( new $mol_time_moment )
			thesis.creator( this.domain().user() )
			thesis.edition( edition )

			this.domain().index().update('', this.content(), thesis.id())

			this.content('')
			this.$.$mol_state_arg.value('thesis_new', null)
			this.$.$mol_state_arg.value('thesis', thesis.id())
		}

		page_title() {
			return !this.content().length ? super.page_title() : this.content().split('\n')[0].trim()
		}

	}

}
