<cfcomponent>

<cffunction name="generalSearch">
	<cfargument name="pumpID" default="" required="true"> 
	<cfquery name="generalSearch_sql" datasource="chestera_main">
		SELECT *
		FROM pumpRecord
		WHERE 0=0
		<cfif arguments.pumpID neq "">
		and pumpID = #ARGUMENTS.PUMPID#
		</cfif>
	</cfquery>
	<cfreturn generalSearch_sql>
</cffunction>

</cfcomponent>