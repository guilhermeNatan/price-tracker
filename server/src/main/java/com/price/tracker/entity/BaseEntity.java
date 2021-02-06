package com.price.tracker.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.price.tracker.reuse.util.DateUtil;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.Calendar;

@MappedSuperclass
@Getter
@Setter
@EntityListeners(AuditingEntityListener.class)
@JsonIgnoreProperties(
        value = {"createAt", "lastUpdate"},
        allowGetters = true
)
public class BaseEntity implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonIgnore
    @Version
    @ColumnDefault(value = "0")
    private Long version;

    @CreatedDate
    @NotNull
    private Calendar createAt;

    @LastModifiedDate
    @NotNull
    private Calendar lastUpdate;


    @JsonIgnore
    @Transient
    public LocalDate getCreateAtInLocalDate()  {
       return DateUtil.convertCalendarToLocalDate(getCreateAt());
    }

    @JsonIgnore
    @Transient
    public LocalDate getLastUpdateInLocalDate ()  {
        return DateUtil.convertCalendarToLocalDate(getLastUpdate());
    }

    public boolean validate() {
        return true;
    }
}
