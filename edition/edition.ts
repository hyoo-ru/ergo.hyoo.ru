namespace $ {

	export class $hyoo_ergo_edition_service extends $mol_object2 {

		domain(): $hyoo_ergo_domain {
			return this.$.$mol_fail(new Error('Not defined'))
		}

		@ $mol_mem_key
		item(id: string) {
			const obj = new this.$.$hyoo_ergo_edition
			obj.id = $mol_const(id)
			obj.domain = $mol_const(this.domain())
			return obj
		}

		@ $mol_action
		create(text: string) {
			const edition = this.item( $mol_guid() )
			edition.text(text)
			return edition
		}

		@ $mol_action
		link(parent: $hyoo_ergo_edition, children: $hyoo_ergo_edition) {
			parent.children( [...parent.children(), children] )
			children.parents( [...children.parents(), parent] )
		}

	}
	export class $hyoo_ergo_edition extends $mol_object2 {

		id(): string {
			return this.$.$mol_fail(new Error('Not defined'))
		}

		domain(): $hyoo_ergo_domain {
			return this.$.$mol_fail(new Error('Not defined'))
		}

		@ $mol_mem
		state() {
			return this.domain().state().doc( 'hyoo_ergo_edition' ).doc( this.id() )
		}

		text(next?: string) {
			return this.state().sub('text').text(next) ?? ''
		}

		request(next?: $hyoo_ergo_request) {
			const id = this.state().sub('request').value(next && next.id())
			if (!id) throw new Error('Request is required')
			return this.domain().request().item( String(id) )
		}

		parents(next?: $hyoo_ergo_edition[]) {
			const ids = this.state().sub('parents').list( next && next.map(obj => obj.id()) )
			return ids.map( id => this.domain().edition().item( String(id) ) )
		}

		children(next?: $hyoo_ergo_edition[]) {
			const ids = this.state().sub('children').list( next && next.map(obj => obj.id()) )
			return ids.map( id => this.domain().edition().item( String(id) ) )
		}
	}
}
