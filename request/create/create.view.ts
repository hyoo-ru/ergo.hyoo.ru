namespace $.$$ {

	export class $hyoo_ergo_request_create extends $.$hyoo_ergo_request_create {

		@ $mol_mem
		content(next?: string) {
			return this.$.$mol_state_local.value( 'thesis_draft', next ) ?? ''
		}

		publish() {
			console.log(1)
			const edition = this.domain().edition( $mol_guid() )
			const request = this.domain().request( $mol_guid() )
			const thesis = this.domain().thesis( $mol_guid() )

			console.log(12)
			edition.content( this.content() )
			edition.request( request )

			console.log(123)
			request.creator( this.domain().user() )
			request.moment( new $mol_time_moment() )
			request.edition( edition )
			request.type( 'create' )
			request.status( 'accepted' )
			console.log(1234)

			thesis.moment( new $mol_time_moment )
			thesis.creator( this.domain().user() )
			thesis.edition( edition )

			console.log(12345)
			this.domain().index().update('', this.content(), thesis.id())

			console.log(123456)
			this.content('')
			this.$.$mol_state_arg.value('thesis', thesis.id())
			console.log(1234567)

			this.$.$mol_state_arg.value('thesis_new', null)
			return true
		}

		page_title() {
			return !this.content().length ? super.page_title() : this.content().split('\n')[0].trim()
		}

	}

}
